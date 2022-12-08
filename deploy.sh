#!/bin/bash
cd gatsby-site
npm run build
cd ../react-site
nmp run build
rm -rf ../gatsby-site/public/cra
mv build ../gatsby-site/public/cra
cd ../gatsby-site
cp ../_redirects public/
netlify deploy --dir=public --prod