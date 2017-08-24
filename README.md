# Intro to Angular 4

```
ng new intro-angular
```

Change into that directory

```
cd intro-angular
```

```
ng serve
```

```
http://localhost:4200
```

Look at file structure

Change some html in the `app.component.html`

```
<p>Here is some text</p>
```

Change title property in `app.component.ts`
```
// from
    title = 'app works!';
// to
    title = 'This app works!';
```

Add style to `styles.css`. These are global styles.

```
h1 {
    color: green;
}
```

Add style to `app.component.css`. Component Styles override global styles.

```
h1 {
    color: red;
}
```

## Add Bootstrap

Add jQuery, Bootstrap, and ngx-bootstrap using NPM

```
npm install jquery bootstrap ngx-bootstrap --save
```

Add this style to "styles": ["styles.css"] in `.angular-cli.json`


```
"styles": [
    "styles.css",
    "../node_modules/bootstrap/dist/css/bootstrap.min.css"
],
```

Add these scripts to "scripts": [] in `.angular-cli.json`

```
"scripts": [
    "../node_modules/jquery/dist/jquery.js",
    "../node_modules/bootstrap/dist/js/bootstrap.min.js"
],
```

Restart dev server! (the dev server does not watch for changes in `.angular-cli.json`)

```
ng s
```

## Property Binding

Add a property to `app.component.ts`

```
imageUrl = "http://lorempixel.com/400/200/"
```

Add image tag to the template `app.component.html` using interpolation (property binding)
```
<img src="{{ imageUrl }}">
```

Add image tag putting the DOM porperty in square brackets (also property binding)

```
<img [src]="imageUrl">
```

You can set the textContent property of the H1 DOM element using this [] syntax

```
<h1 [textContent]="title"></h1>
```

## Class Binding

Add a buttons to `app.component.html`

```
<button class="btn btn-primary">Submit</button>
```

Use class binding to add the "active" class to button when the isActive property is true

```
// change from 
    <button class="btn btn-primary">Submit</button>
// to
    <button class="btn btn-primary" [class.active]="isActive">Submit</button>
```

Add isActive property to `app.component.ts`

```
isActive = true;
```

## Style Binding

Add another button and use style binding to set the backgroundColor style to "green" the isActive property is true otherwise set it to "gray"

```
<button class="btn btn-primary" [style.backgroundColor]="isActive ? 'green' : 'red'">Submit</button>
```

## Event Binding

Use event binding to handle events raised by the DOM such as clicks and keystrokes

```
<button class="btn btn-primary" (click)="onClick()">Submit</button>
```

Write the onClick() method in  `app.component.ts`

```
onClick() {
    console.log('Clicked!');
}
```

Lets also have that method toggle the isActive property 

```
onClick() {
    console.log('Clicked!');
    this.isActive = !this.isActive;
}
```

Talk about generating components and inline templates and styles

## *ngIf and *ngFor

Create a div with the class `well` and put some text in it

```
<div class="well">
  <p >here</p>
</div>
```

Now add the *ngIf directive. The well is only visible when the isActive property is true

```
<div class="well" *ngIf="isActive">
  <p>well</p>
</div>
```

Copy and paste that div and change as shown here to toggle between wells

```
<div class="well" *ngIf="!isActive">
  <p>another well</p>
</div>
```

In the `app.component.ts` define another property called colors and set it equal to an array of some colors.

```
colors = ['red', 'blue', 'green', 'yellow']
```

Now back in the app.component template, create a ul with an li element as shown

```
<ul>
  <li *ngFor="let color of colors">{{ color }}</li>
</ul>
```

# Start the Bookmark Project

Create a new project (call it whatever you want)

```
ng new ablinks
```

Change into that directory

```
cd ablinks
```

```
ng serve
```

```
http://localhost:4200
```

## Add Bootstrap

Add jQuery, Bootstrap, and ngx-bootstrap using NPM

```
npm install jquery bootstrap ngx-bootstrap --save
```

Add this style to "styles": ["styles.css"] in `.angular-cli.json`


```
"styles": [
    "styles.css",
    "../node_modules/bootstrap/dist/css/bootstrap.min.css"
],
```

Add these scripts to "scripts": [] in `.angular-cli.json`

```
"scripts": [
    "../node_modules/jquery/dist/jquery.js",
    "../node_modules/bootstrap/dist/js/bootstrap.min.js"
],
```

Restart dev server! (the dev server does not watch for changes in `.angular-cli.json`)

```
ng s
```

## Generate components

First lets generate a component called `navbar`

```
ng g c navbar
```

Add this component to `app.component.html`

```
<app-navbar></app-navbar>
```

Change the html in the template `navbar.component.html`

```
<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">My Links</a>
    </div>
    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Add Link</a></li>
      </ul>
    </div>
  </div>
</nav>
```

Generate another component called `links`

```
ng g c links
```

Add this component to `app.component.html`

```
<app-links></app-links>
```

You can't see the paragraph "links works!" because it is behind the navbar right now. Lets fix that by adding a global style to `styles.css`

```
body {
    padding-top: 60px;
}
```

In the LinksComponent class define an array of link objects, each with a name and a url property in `links.component.ts`

```
links = [
    {name: 'Angular', url: 'https://angular.io/'},
    {name: 'Angular Style Guide', url: 'https://angular.io/docs/ts/latest/guide/style-guide.html'},
    {name: 'ngDoc', url: 'http://ngdoc.io/'},
    {name: 'Firebase', url: 'https://firebase.com'},
    {name: 'Bootstrap', url: 'https://getbootstrap.com'},
]
```

Use ngFor to display each these links in `links.component.html`

```
<div *ngFor="let link of links">
  <a href="{{link.url}}">{{ link.name }}</a>
</div>
```

Add a class to the div to space away from the left edge

```
<div *ngFor="let link of links" class="links-div">

```

Change styleUrls: in `links.component.ts` to just styles: and replace the url with an inline style

```
styles: ['.links-div { padding-left: 15px; }']
```

## Extract links to their own service

Generate a service called `links` and letsput it in a folder called shared.

```
ng g s shared/links
```

Cut the links array from `links.component.ts` and paste in the LinksService class in `links/links.service.ts`

```
links = [
    {name: 'Angular', url: 'https://angular.io/'},
    {name: 'Angular Style Guide', url: 'https://angular.io/docs/ts/latest/guide/style-guide.html'},
    {name: 'ngDoc', url: 'http://ngdoc.io/'},
    {name: 'Firebase', url: 'https://firebase.com'},
    {name: 'Bootstrap', url: 'https://getbootstrap.com'},
];
```

Remove the links array from `links.component.ts` and just leave ...

```
links;
```

Back in `links.component.ts` lets import the service, inject it into the constructor .and assign it to the links property in the OnInit() method

```
import { LinksService } from '../shared/links.service';
```

```
constructor(private _linksService: LinksService) { }
```

```
ngOnInit() {
    this.links = this._linksService.links;
}
```

Now look in the browser and in the console we can see an error telling use that there is still no provider for the LinksService.  Lets add that provider in `app.module.ts`

```
import { LinksService } from './shared/links.service';
```

```
providers: [LinksService],
```

## Firebase

Sign up for a [Firebase](https://firebase.google.com/) account

Add a new project in Firebase (I called mine 'ablinks')

In the Firebase console change database rules from 

```
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
```

to ... and be sure to click PUBLISH

```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

Install [angularfire2](https://github.com/angular/angularfire2) (Before you start installing AngularFire2, make sure you have latest version of angular-cli installed. See [installation instructions](https://github.com/angular/angularfire2/blob/master/docs/1-install-and-setup.md).

Install AngularFire 2 and Firebase

```
npm install angularfire2 firebase --save
```

Import AngularFireModule & AngularFireDatabaseModule in `app.module.ts`

```
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
```

Add these modules to the @NgModule imports array in `app.module.ts`

```
AngularFireModule.initializeApp(),
AngularFireDatabaseModule,
```

Copy the configuration object from Firebase and use as argument for initializeApp() method

```
AngularFireModule.initializeApp({
    apiKey: "...",
    authDomain: "...",
    databaseURL: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "..."
}),
```

Import AngularFireDatabase in `links.service.ts`

```
import { AngularFireDatabase } from 'angularfire2/database';
```

Declare a variable called links (which will be a Firebase list object) in `links.service.ts`

```
links;
```

In the constructor inject the AngularFireDatabase object and set links to a Firebase list object from the links endpoint on the Firebase server. This will be listening to the list of links. `links.service.ts`

```
constructor(db: AngularFireDatabase) {
    this.links = db.list('/links');
}
```

Define a method called addLink() to push new links to the database and reset our local state. `links.service.ts`

```
addLink(name, url) {
    this.links.push({name: name.value, url: url.value})
    name.value = url.value = '';
}
```

Back in `links.compoment.ts` add the async pipe to the ngFor

```
<div *ngFor="let link of links | async" class="links-div">
```

Also add some additional code to allow the user to add new links

```
<div>
  <input placeholder="name" #name>
  <input placeholder="url" #url>
  <button class="btn btn-primary" (click)="addLink(name, url)">Add Link</button>
</div>
```

Note: the *async* pipe is actually creating a subscription only to that observable and only within the context of this component. So when this component is not instantiated, when it is not on the screen, for example if we on another route, it is automatically going dispose of and end that subscription so that we are not wasting resources in order to keep that alive.

Finally, add the addLink method to `links.component.ts` and have it call the addLink method from the links service

```
addLink(name, url) {
    this._linksService.addLink(name, url);
}
```

Check it out in a couple different browser tabs!