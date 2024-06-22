import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // themeKey deve ser o mesmo referenciado no link em 'index.html'
  // <link id="app-theme" rel="stylesheet" type="text/css" href="light.css" />
  public readonly themeKey = 'app-theme';
  public readonly defaultTheme = 'light';
  public readonly lightTheme = 'light';
  public readonly darkTheme = 'dark';

  setup() {
    var activeTheme = localStorage.getItem(this.themeKey) || this.defaultTheme;

    if (activeTheme) {
      this.setTheme(activeTheme);
    }
  }

  getTheme() {
    return localStorage.getItem(this.themeKey);
  }

  setTheme(theme: string) {
    let themeLink = document.getElementById(this.themeKey) as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '.css';
    }
    localStorage.setItem(this.themeKey, theme);
  }

  switchTheme() {
    const currentTheme = this.getTheme();
    const newTheme =
      currentTheme === this.darkTheme ? this.lightTheme : this.darkTheme;

    this.setTheme(newTheme);
  }

  constructor() {}
}
