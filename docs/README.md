# Special Diagramation: Grid with options

This custom component displays a grid that you can change with 4 different options.

Option 1
![image](https://user-images.githubusercontent.com/101153916/195466098-603a9574-08d7-4823-bf2a-b451bd23431b.png)

Option 2
![image](https://user-images.githubusercontent.com/101153916/195466072-39bbc677-79f0-492e-857c-ae0af47e121f.png)

Option 3
![image](https://user-images.githubusercontent.com/101153916/195466058-a6fc308d-656c-4baf-a488-9a8b74acb85b.png)

Option 4
![image](https://user-images.githubusercontent.com/101153916/195466037-5189229b-8b36-42f4-ac80-db822ed067dd.png)

## Configuration

### Step 1 -  Basic setup

Access in github to VTEX APPS and search react-app-template (https://github.com/vtex-apps/react-app-template) this is the template base for this project. If you want 
to start the project from the beginning clone this template.

### Step 2 - Cloning the repository

If you want to work with this template open your terminal a clone this repository, command (git clone [urlRepository], to your local files to be able to effectively 
start working on it.
Then, access the repository's directory using your terminal. 

### Step 3 - Editing the `Manifest.json`

Once in the repository directory, it is time to edit the `manifest.json` file. 

Once you are in the file, you must replace the `vendor` value. `vendor` is the account name you are working on, if you want yo can modify name, titel, and description. For example:

```json
{
  "vendor": "storecomponents",
  "name": "my-custom-component",
}
```
You should also check the `package.json` file globar and the file in react folder, verify the name and the version.

### Step 4 -  Installing node-modules

In your terminal enter in react folder, command (cd react), then put yarn in the terminal, this commad install node-modules folder, close your editor and open again 
the project in your editor, you should have install and funtional the modules in react folder.

### Step 5- Run and preview your component

Then time has come to upload all the changes you made in your local files to the platform. For that, use the `vtex link` command. If the process runs without any  
errors, the following message will be displayed: `App linked successfully`.

To use the component in a store you should this in your "dependencies" in `manifest.json` file, "vendorName.componentName" : "version", for example:
 ```json
{
"dependencies": {
   "itgloberspartnercl.special-diagramation": "0.x"
  }
}
```
Then put the component where ever you need.

This will enable you to see the applied changes in real time, through the account and workspace in which you are working.

## Dependencies
1. "vtex.css-handles": "0.x"

## Store Component Apps
1. None

## Custom Apps
1. None

## Contributors
1. Daniela María Torres Vélez

