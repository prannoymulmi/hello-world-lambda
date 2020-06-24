# Hello World Lambda
[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

This is a hello world lambda function using NodeJs and typescript, which is 
to be deployed as a serverless application in AWS cloud.

This lambda function setup using the [serverless framework](https://github.com/serverless/serverless).

###Prerequisites
The following things have to be installed to run the  
* NodeJS 
* TypeScript

###Installing libraries in a VM
If you are trying to install the libraries required for the application in a VM. 
Please use the following command
```
npm install @types/aws-lambda --no-bin-links
```

### How to

To make typescript work better with node, install the two following dependencies:

````$xslt
npm install @types/aws-lambda @types/node --save --no-bin-links

````

To deploy lambda using serveless, execute the following commands

````
aws-vault exec pmulmi-admin npm run deploy

````

#### To remove serverless config stack

````$xslt
aws-vault exec pmulmi-admin serverless remove
````