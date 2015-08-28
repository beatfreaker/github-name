# github-name

> Check whether username is available on GitHub

## Install

```
> npm install github-name --save
```

## Usage

```
var githubName = require('github-name');

githubName('beatfreaker', function (err, isAvailable) {
	console.log(isAvailable); //=> false
});
```

## CLI

```
Install
	> npm install github-name --global
```
```
Usage
	> github-name --help
	
Examples
	> github-name fdjkreij
	✔ Available
	> github-name chintsradia
	✖ Unavailable
```

## License
MIT © [Chintan Radia](https://beatfreaker.github.io/)
