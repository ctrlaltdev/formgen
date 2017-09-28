[![Issues](https://img.shields.io/github/issues/implose/preform-filler.svg?style=flat-square)](https://github.com/implose/AMA/issues)
[![I love badges](https://img.shields.io/badge/I%20love-badges-FF00FF.svg?style=flat-square)](https://shields.io)

# Pre-Form Filler

## Installation

### Requirements
* Node.js 6.11+
* Some trigger emailing service like mailjet.com

### How to install
* Clone this repo: ```git clone https://github.com/implose/preform-filler.git```
* Move inside the directory: ```cd preform-filler```
* Install the npm packages: ```npm i```
* Customize conf.json
* Copy form.sample.json to form.json and fill it
* Pet a cat
* Enjoy life

### TO DO
* [x] Basic structure
* [x] Form Customization
* [ ] Sass Customization
* [ ] Mail Service Config
* [ ] Everything else!

## Usage
Everything is built from the `form.json` - so if you mess the structure, it all goes kablooey. So here are a few indications on how to get it right.

### Global structure
At the root of the `form.json`, you'll have 4 properties :
1. Method
2. Action
3. Form
4. Submit

```json
{
  "method": "post",
  "action": "/",
  "form":[],
  "submit":{
    "action": "Send"
  }
}
```
So, expectingly, `method` is the get or post method the form should use - what you put here is what will be in the method attribute of the form tag.  
Likewise, `action` is the destination of uour form on submit - what you put here is what will be in the action attribute of the form tag.  
`submit` is an object containing the property `action`, which value is a string. It is used to customize the submit button.  
Finally, the `form` property is an array of objects, each object will be a field in the final form, more about this below.

### Form property and fields

#### Inputs



#### Datalists

#### Checkboxes, Radios and Selects