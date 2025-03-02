import React from 'react';


<>

:root {

{/*1.1 COLOR */}

--ui-color-brand: #353535;

/* COLOR PALETTE */

--ui-color-n-000: #fff;
--ui-color-n-100: #ebebeb;
--ui-color-n-300: #aeaeae;
--ui-color-n-500: #353535;
--ui-color-n-700: #282828;
--ui-color-n-900: #1a1a1a;

/* BACKGROUND COLOR */

--ui-color-background-primary: var(--ui-color-n-000);

/* FORM COLOR */

--ui-color-form-input: var(--ui-color-n-100);

/* TYPOGRAPHY COLOR */

--ui-color-typography-heading: var(--ui-color-n-500);
--ui-color-typography-body   : var(--ui-color-n-900);
--ui-color-typography-note   : var(--ui-color-n-300);
--ui-color-typography-button : var(--ui-color-n-000);

/*1.2 TYPOGRAPHY*/

--ui-typography-typeface: "Inter", sans-serif;

/* FONT SIZE */

--ui-typography-h1: 1.9375rem;
--ui-typography-h2: 1.5625rem;
--ui-typography-h3: 1.25rem;
--ui-typography-p : 1rem;
--ui-typography-s : .8125rem;

/* LEADING */

--ui-typography-h1-leading: 1.2;
--ui-typography-h2-leading: 1.2;
--ui-typography-h3-leading: 1.25;
--ui-typography-p-leading : 1.5;

/* MARGIN */

--ui-typography-margin-heading: .75rem;
--ui-typography-margin-body   : 1.125rem;

/*1.3 LAYOUT*/

--ui-layout-container: 1.25rem;
--ui-layout-grid     : 3.625rem;
--ui-layout-gutter   : 1rem;

/* GAP */

--ui-gap-cta    : .75rem;
--ui-gap-content: 2rem;

/* BORDER RADIUS */

--ui-radius-button: 5rem;
--ui-radius-input : 5rem;

}

{/*--------------------------------------------------------------
2.0 FOUNDATION
--------------------------------------------------------------*/}

html { box-sizing: border-box; }

*,
*:before,
*:after { box-sizing: inherit; }

body {
background-color: var(--ui-color-background-primary);
color: var(--ui-color-typography-body);
font-family: var(--ui-typography-typeface);
font-feature-settings: "liga", "kern";
font-size: var(--ui-typography-p);
font-weight: 400;
line-height: var(--ui-typography-p-leading);
margin: 0 auto;
text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
}

/*--------------------------------------------------------------
3.0 TYPOGRAPHY
--------------------------------------------------------------*/

a {
color: var(--ui-color-brand);
text-decoration: none;
}

h1,
h2,
h3,
p { margin-top: 0; }

h1,
h2,
h3 {
color: var(--ui-color-typography-heading);
margin-bottom: var(--ui-typography-margin-heading);
}

h1 {
font-size: var(--ui-typography-h1);
line-height: var(--ui-typography-h1-leading);
}

h2 {
font-size: var(--ui-typography-h2);
line-height: var(--ui-typography-h2-leading);
}

h3 {
font-size: var(--ui-typography-h3);
line-height: var(--ui-typography-h3-leading);
}

p { margin-bottom: var(--ui-typography-margin-body); }

p:last-child { margin-bottom: 0; }

strong { font-weight: 700; }

small { font-size: var(--ui-typography-s); }

.ui-text-note {
color: var(--ui-color-typography-note);
line-height: 1;
}

/*4.0 IMAGE*/

img,
svg {
display: block;
height: auto;
margin: 0 auto;
max-width: 100%;
}

/*5.0 LAYOUT*/

.ui-layout-container {
padding-left: var(--ui-layout-container);
padding-right: var(--ui-layout-container);
}

.ui-layout-flex,
.ui-layout-grid {
align-items: center;
justify-content: center;
}

.ui-layout-flex { display: flex; }

.ui-layout-grid { display: grid; }

/*6.0 COMPONENT*/

.ui-component-cta {
flex-direction: column;
row-gap: var(--ui-gap-cta);
}

/*6.2 FORM */

input,
button {
color: inherit;
font-family: inherit;
font-size: var(--ui-typography-p);
line-height: 1;
margin: 0;
outline: none;
text-rendering: inherit;
text-transform: none;
}

/* FORM */

form { width: 100%; }

.ui-component-form {
background-color: var(--ui-color-form-input);
border-radius: var(--ui-radius-input);
grid-template-columns: minmax(0, 1fr) auto;
padding: .25rem;
}

/* INPUT */

::placeholder { color: var(--ui-color-typography-note); }

.ui-component-input {
background-color: var(--ui-color-form-input);
border: .0625rem solid var(--ui-color-form-input);
border-radius: var(--ui-radius-input);
}

.ui-component-input-medium {
height: 2.5rem;
padding: .625rem 1rem .75rem;
}

/*6.3 BUTTON */

button {
background: transparent;
border: 0;
cursor: pointer;
display: block;
padding: 0;
}

.ui-component-button {
border: .0625rem solid var(--ui-color-brand);
border-radius: var(--ui-radius-button);
display: block;
font-weight: 700;
line-height: 1;
text-align: center;
}

.ui-component-button-primary {
background-color: var(--ui-color-brand);
color: var(--ui-color-typography-button);
}

.ui-component-button-medium {
padding: .625rem .875rem .75rem;
width: fit-content;
}

/*7.1 HEADER */

.ui-section-header {
padding-bottom: 1.25rem;
padding-top: 1.25rem;
}

.ui-section-header__layout { justify-content: space-between; }

/*7.2 CONTENT */

.ui-section-content {
padding-bottom: 2em;
padding-top: 7rem;
text-align: center;
}

.ui-section-content--image {
margin-bottom: var(--ui-gap-content);
margin-top: var(--ui-gap-content); 
}

.ui-section-content--feature { row-gap: var(--ui-gap-content); }

.ui-section-content--icon { margin-bottom: 1rem; }

/*7.3 CLOSE*/

.ui-section-close {
padding-bottom: 5rem;
padding-top: 5rem;
text-align: center;
}

/*7.4 FOOTER */

.ui-section-footer {
padding-bottom: 1.25rem;
padding-top: 1.25rem;
}

.ui-section-footer__layout {
column-gap: var(--ui-layout-gutter);
}

.ui-section-footer--copyright {
margin-bottom: 0;
margin-right: auto;
}

/*8.0 MEDIA */

@media screen and (min-width: 48rem) {

/*VARIABLE*/

:root {

  /*TYPOGRAPHY */

  /* FONT SIZE */

  --ui-typography-h1: 2.1875rem;
  --ui-typography-h2: 1.75rem;
  --ui-typography-h3: 1.4375rem;
  --ui-typography-p : 1.125rem;
  --ui-typography-s : .875rem;

  /* MARGIN */

  --ui-typography-margin-body: 1.25rem;

  /*LAYOUT */

  --ui-layout-container: 4.25rem;
  --ui-layout-gutter   : 1.5rem;

  /* GAP */

  --ui-gap-content: 3rem;

}

/* LAYOUT */

.ui-layout-container,
.ui-layout-column-center {
  margin-left: auto;
  margin-right: auto;
}

.ui-layout-grid-3 {
  column-gap: var(--ui-layout-gutter);
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
}

.ui-layout-grid-3 div:last-of-type {
  left: calc(50% + (var(--ui-layout-gutter) / 2));
  position: relative;
}

.ui-layout-column-4 {
  width: calc((var(--ui-layout-grid) * 4) +
         (var(--ui-layout-gutter) * 3));
}

.ui-layout-column-6 {
  width: calc((var(--ui-layout-grid) * 6) +
         (var(--ui-layout-gutter) * 5));
}

/* HEADER */

.ui-section-header {
  padding-bottom: 2rem;
  padding-top: 2rem;
}

/*CONTENT */

.ui-section-content { padding-bottom: 3rem; }

.ui-section-content--icon {
  height: 4rem;
  width: 4rem;
}

/*FOOTER */

.ui-section-footer {
  padding-bottom: 2rem;
  padding-top: 2rem;
}

}

/*8.2 1024PX */

@media screen and (min-width: 64rem) {

/*VARIABLE */

:root {

  /* LAYOUT */

  --ui-layout-container: 0;

}

/* TYPOGRAPHY */

a { transition: all 250ms ease; }

a:not(.ui-component-button):hover {
  color: var(--ui-color-typography-body);
}

/* LAYOUT */

.ui-layout-container { width: 60rem; }

.ui-layout-grid-3 { grid-template-columns: repeat(3, 1fr); }

.ui-layout-grid-3 div:last-of-type { position: static; }

}


@media screen and (min-width: 75rem) {

:root {

  /* FONT SIZE */

  --ui-typography-h1: 2.75rem;
  --ui-typography-h2: 2.1875rem;
  --ui-typography-h3: 1.75rem;
  --ui-typography-h4: 1.4375rem;

  /* MARGIN */

  --ui-typography-margin-heading: 1rem;
  --ui-typography-margin-body   : 1.75rem;

  /* LAYOUT */

  --ui-layout-grid  : 4rem;
  --ui-layout-gutter: 2rem;

  /* GAP */
  
  --ui-gap-content: 4rem;
  
}

/* TYPOGRAPHY */

.ui-text-intro { font-size: var(--ui-typography-h4); }

/* LAYOUT */

.ui-layout-container { width: 70rem; }

/* SECTION */

/* HEADER */

.ui-section-header {
  padding-bottom: 3rem;
  padding-top: 3rem;
}

/* CONTENT */

.ui-section-content {
  padding-bottom: 5rem;
  padding-top: 7.5rem;
}

.ui-section-content--icon {
  height: 5rem;
  margin-bottom: 1.125rem;
  width: 5rem;
}

.ui-section-close {
  padding-bottom: 7.5rem;
  padding-top: 7.5rem;
}

.ui-section-footer {
  padding-bottom: 7.5rem;
  padding-top: 3rem;
}

}

/* Dropdown Button */
.dropbtn {
background-color: grey;
color: white;
padding: 16px;
font-size: 16px;
border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
position: relative;
display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
display: none;
position: absolute;
background-color: #f1f1f1;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
color: black;
padding: 12px 16px;
text-decoration: none;
display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: black;}


</>