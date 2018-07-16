# React Native Login Exam
A React Native login screen built with Expo XDE

Test by logging in with these user accounts:
- email: 'bananaman_18@vananaz.com', password: 'vananaz12345'
- email: 'ajcatarina@vananaz.com', password: 'hireme'

<img src="https://cdn.pbrd.co/images/HuHtQ54.png" width="200px"/>



## Dependencies
- [validate.js](https://www.npmjs.com/package/validate.js) - straightforward, declarative way of JavaScript validation

## Issues
### Android
- **KeyboardAvoidingView** - a known [bug](https://github.com/facebook/react-native/issues/11681) on React Native for Android. The expected result is to have the Sign Up button sit above the keyboard.

  <img src="https://cdn.pbrd.co/images/HuH7mo3.png" width="200px"/>

- **Dynamic fontStyle on TextInput** - another known [issue](https://github.com/facebook/react-native/issues/2140) on React Native for Android. The expected result is for the placeholder to have *fontStyle: 'italic'* and the value to have *fontStyle: 'normal'*. This is achieved on iOS but not on Android.

  <img src="https://cdn.pbrd.co/images/HuH6pqH.png" width="200px"/>

### iOS
- No issue found

## See App
Expo Host: [ajcatarina-technical-test](https://exp.host/@ajcatarina/ajcatarina-technical-test)

Android APK: [Click here to Download](https://expo.io/artifacts/51cf96ee-54f3-4cd9-9e71-267b4c27e03d)

