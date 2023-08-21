const puppeteer = require('puppeteer');
const prompt = "Struggling engineering student"

let browser = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args: ['--start-maximized']
})

let page;

browser.then((browserobj) => {
  let browserprom = browserobj.newPage();
  return browserprom;
}).then((newtab) => {
  page = newtab;
  return page.goto('https://www.aipoemgenerator.org/?ref=theresanaiforthat');
}).then(() => {
  return page.type("input[type='text']", prompt)
}).then(() => {
  return page.click("button[type='button']")
}).then(()=>{
  return page.waitForSelector("textarea[id='message']")
}).then(() => {
  return page.screenshot({
    path: "engineer's_strugle.jpg",
    fullPage: true
  });
}).then(() => {
  return page.pdf({
    path: 'result.pdf',
    margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
    printBackground: true,
    format: 'A4',
  })
})

  .catch((err) => {
    console.log(err);
  })


