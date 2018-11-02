# ![Example module created automatically](https://s3-eu-west-1.amazonaws.com/moaiii-cv/react-icon.png) React Create Component

##### A global cli tool for creating modular react components. Inspired by ng-generate for Angluar. 
___


### Purpose
This tool helps developers structure their react applications by feature. This is converse to structuring your app by type. 
More on this in the React docs here https://reactjs.org/docs/faq-structure.html

Structuring your application by feature allows you to create modular components which can be easily ported to other projects. Structuring by type, i.e. all your reducers in one folder, makes this portability more difficult. 

Creating modular react components requires a lot of boilerplate code. This tool looks to create that boilerplate rapidly and allow the developer to focus on what matters, writting component logic!

### Considerations
Currently the tool assumes you store your components at held in the folder `./src/ui`

### Useage
Install 
```$npm i -g moaiii-react-create-component```

Once installed globally you have access to the CLI command `$rcr`. 

An example command would be
```$rcr --view --ExampleComp --stateful --redux```


Argument | What | Example
------------ | ------------- | -------------
1 | Where to put the new component | `--view`
2 | Component name | `--ExampleName`
3 | React component type | either `--stateful` or `--stateless`
4 | Flag to connect component to redux with action, middleware and reducer files | blank or `--redux`

### Output
```$rcr --view --ExampleComp --stateful --redux```

Creates the following files in `./src/ui/views`

![Example module created automatically](https://s3-eu-west-1.amazonaws.com/moaiii-cv/Screenshot+2018-11-02+at+12.53.05.png)

```$rcr --forms --AnotherExample --stateless```

Creates the following files in `./src/ui/views`

![Example module created automatically](https://s3-eu-west-1.amazonaws.com/moaiii-cv/Screenshot+2018-11-02+at+12.57.34.png)