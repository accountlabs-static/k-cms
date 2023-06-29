const { spawn } = require('child_process');

function runCommand(command) {
  return new Promise((resolve, reject) => {
    const options = {
      shell: true
    };

    const child = spawn(command, options);

    child.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    child.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    child.on('error', (error) => {
      reject(error);
    });

    child.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Script exited with code ${code}`));
      } else {
        resolve();
      }
    });
  });
}

const commands = [
  'dotenv -- cross-var docu-notion -n "%DOCU_NOTION_INTEGRATION_TOKEN%" -r "%DOCU_NOTION_DOCS_ROOT_PAGE_EN%"',
  'dotenv -- cross-var docu-notion -n "%DOCU_NOTION_INTEGRATION_TOKEN%" -r "%DOCU_NOTION_BLOG_ROOT_PAGE_EN%" -m blog',
  'dotenv -- cross-var docu-notion -n "%DOCU_NOTION_INTEGRATION_TOKEN%" -r "%DOCU_NOTION_DOCS_ROOT_PAGE_HANT%" -m i18n/zh-Hant/docusaurus-plugin-content-docs/current',
  'dotenv -- cross-var docu-notion -n "%DOCU_NOTION_INTEGRATION_TOKEN%" -r "%DOCU_NOTION_BLOG_ROOT_PAGE_HANT%" -m i18n/zh-Hant/docusaurus-plugin-content-blog',
  'dotenv -- cross-var docu-notion -n "%DOCU_NOTION_INTEGRATION_TOKEN%" -r "%DOCU_NOTION_DOCS_ROOT_PAGE_KO%" -m i18n/ko/docusaurus-plugin-content-docs/current',
  'dotenv -- cross-var docu-notion -n "%DOCU_NOTION_INTEGRATION_TOKEN%" -r "%DOCU_NOTION_BLOG_ROOT_PAGE_KO%" -m i18n/ko/docusaurus-plugin-content-blog',
];

(async () => {
  try {
    await Promise.all(commands.map((command) => runCommand(command)));
    console.log('All commands executed successfully');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
})();