# React Native Login Exam
A React Native login screen built with Expo XDE

Test by logging in with these user accounts:
- email: 'bananaman_18@vananaz.com', password: 'vananaz12345'
- email: 'ajcatarina@vananaz.com', password: 'hireme'

<kbd><img src="https://cdn.pbrd.co/images/HuHtQ54.png" width="200px"/></kbd>

## Dependencies
- [validate.js](https://www.npmjs.com/package/validate.js) - straightforward, declarative way of JavaScript validation

## Issues
### Android
- **KeyboardAvoidingView** - a known [bug](https://github.com/facebook/react-native/issues/11681) on React Native for Android. The expected result is to have the Sign Up button sit above the keyboard.

  <kbd><img src="https://cdn.pbrd.co/images/HuH7mo3.png" width="200px"/></kbd>

- **Dynamic fontStyle on TextInput** - another known [issue](https://github.com/facebook/react-native/issues/2140) on React Native for Android. The expected result is for the placeholder to have *fontStyle: 'italic'* and the value to have *fontStyle: 'normal'*. This is achieved on iOS but not on Android.

  <kbd><img src="https://cdn.pbrd.co/images/HuH6pqH.png" width="200px"/></kbd>

### iOS
- No issue found

## See App
Expo Host: [ajcatarina-technical-test](https://exp.host/@ajcatarina/ajcatarina-technical-test)

Android APK: [Click here to Download](https://exp-shell-app-assets.s3-us-west-1.amazonaws.com/android%2F%40ajcatarina%2Fajcatarina-technical-test-141ed35b-88fc-11e8-9d14-0a580a7805fd-signed.apk)

