Portfolio
===========================

A minimal portfolio site.

### Setup
```
npm install

# to generate image thumbnail, install graphics libraries
brew install imagemagick
brew install graphicsmagick
```

### Development
The first build might take a while building all the image assets.  Subsequent builds will only regenerate changed images, and so should be much faster.
```
gulp
```

### Deployment

```
gulp deploy
```
