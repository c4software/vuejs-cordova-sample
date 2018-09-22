# :snowflake: cordova-plugin-android-window-background :art: :lollipop:

[![Latest Stable Version](https://img.shields.io/npm/v/cordova-plugin-android-window-background.svg)](https://www.npmjs.com/package/cordova-plugin-android-window-background) [![Total Downloads](https://img.shields.io/npm/dt/cordova-plugin-android-window-background.svg)](https://npm-stat.com/charts.html?package=cordova-plugin-android-window-background) [![License](https://img.shields.io/github/license/winteragency/cordova-plugin-android-window-background.svg)](https://github.com/winteragency/cordova-plugin-android-window-background) [![Made by WINTER](https://img.shields.io/badge/made%20by-%E2%9D%84%20WINTER-blue.svg)](https://winter.ax)

This is a simple plugin for Android which will set the window background color for you app's MainActivity to a color of your choice.
This allows you to avoid the standard dark grey background which will flash for a second before your splash screen appears. Set the color to the same background as your splash screen for a smoother start-up effect.

## Installation

You'll need to set your desired window background color while installing the plugin by supplying the `WINDOW_BACKGROUND_COLOR` variable. Set it to whatever you want, preferrably the same color as your splash screen.

    cordova plugin add cordova-plugin-android-window-background --variable WINDOW_BACKGROUND_COLOR=#ff69b4 --save
	
Or install directly from this repo:

    cordova plugin add https://github.com/winteragency/cordova-plugin-android-window-background.git --variable WINDOW_BACKGROUND_COLOR=#ff69b4 --save

	
## Supported Platforms

- Android (cordova-android 7.0.0+)

## Configuration

A custom `WINDOW_BACKGROUND_COLOR` variable will be added to your app's config.xml after installation with the value you selected (provided you included the `--save` flag).
You can change it whenever you want, but you'll need to remove and re-add the Android platform from your project in order for the change to go through.

    <plugin name="cordova-plugin-window-background">
        <variable name="WINDOW_BACKGROUND_COLOR" value="#B4D455" />
    </plugin>

To re-add the Android platform:

	cordova platform remove android
	cordova platform add android
	
## TODO

- Set status bar and/or navigation bar color in the theme as well. The standard Cordova Status Bar plugin will set the status bar color only after the app has initalized, resulting in an ugly translucent status bar while the splash screen is showing.
- Allow an image background to be used as windowBackground? Perhaps set it to the same image as the splash screen automatically?
- Find a way to make changes to config.xml automatically update without having to re-add the platform.


## License

The MIT License

Copyright (c) 2018, WINTER AGENCY

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.