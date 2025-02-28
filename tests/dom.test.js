const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');
const dom = new JSDOM(html);
const { document } = dom.window;

global.document = document;

// Підключення функцій студента (імітація)
const { changeHeaderColor } = require('../index.html');

describe('DOM Tests', () => {
  test('Завдання 1: Колір заголовка синій', () => {
    changeHeaderColor();
    const header = document.getElementById('header');
    expect(header.style.color).toBe('blue');
  });
});
