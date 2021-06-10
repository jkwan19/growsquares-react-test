# GrowSquares React Project

React project test for prospective web developers wanting to come work at GrowSquares.

## Overview

We want to test you in how you would perform in creating a component for our design team and will give us a feel as to how you perform on a task that closely resembles what you would be working on at GrowSquares!
At a high level this project needs the user to see how different `plant_type`(s) perform in different `home_type`(s) over the year.

The designers have taken away some of your work and abstracted out how each `plant_type` performs in each `home_type` over the year into the form of a video. For example, for the 'Basil' plant in the 'Apartment' type home configuration, the video would be named `env_plant_basil_apartment.mp4`. More generally, these videos take the form: `env_plant_{plant_type}_{home_type}.mp4`. You can find these videos in `assets/videos`.

Then, since we want the user to be able to see how the plant performs we have a slider. Think of the whole range of this slider as `Jan 01 - Dec 31`. Scrolling to a specific location in the slider, should [scrub](https://en.wikipedia.org/wiki/Scrubbing_%28audio%29) the video in the aforementioned video. While the video length may vary, you should scrub based on the percentage.

## Task

What you read above was an overview. We get into the nitty-gritty details below:

1.  **Left hand side**:

    - The left hand side is a video asset that is NOT autoplayed or looped. Towards the bottom of the video asset, we have a set of three buttons: `House`, `Apartment`, `Town House`. Clicking any of these buttons should change the underlying video asset to the corresponding `home_type` and `plant_selection`(which is on the right-hand side - More explained below).

2.  **Right hand side**:

    - The top portion of this just some text (feel free to fill it out with lorem ipsum!)

    - The bottom section of the right hand side is two-fold:

    - `Plant Selection`: This is a list of 3 plants of whose assets you can find in `assets/plant_images`. Each of these is a button which should cause the video to switch to the corresponding plant video.

    - `Slider with month`: On moving this slider, two things should happen:
      1. The month label should get updated to the corresponding month with respect to the slider. (HINT: It might be helpful to think about the slider being divided into 365 parts).
      2. On moving the slider to a specific location, scrub the video asset in the left hand side to the corresponding location (i.e., if the slider is 36% 'slided', the video should be scrubbed 36% ahead in time from the beginning of the video). Backward functionality is required too!

3.  **Mobile Responsiveness**:
    - It is an absolute must for this project to be mobile responsiveness (ideally, it should look good on all screen sizes but mobile responsiveness is a necessity). We would have provided you a picture as to how the project should look like on mobile screens.

## Requirements and Restrictions

- You MUST use `React` as a framework to develop this project
- You MAY use any `npm` or `yarn` packages that you feel would be useful for this task. Just remember, these packages should not make the task trivial.
- You MAY structure this project either as a fully client side built app or serve your web app using something like `Express.js`
- You MAY NOT use automatic code generation software to generate the UI for you

## Development:

- This is just a template repository so it is up to you how you would like to structure your solution. Part of this assessment is to judge how well you structure and componentize your code!
- If possible, deploy your web app to Heroku as a web app and email us the Heroku web app link. We do keep in mind that if you do so, it takes a couple of minutes for the Heroku cluster to spin up (if you're on a free version), so don't be worried on that end!
- If you cannot deploy to a free hosting platform, push your code to a public git repository so that we can see your commit history and judge you based on how far you got based on a specific time frame. Keep that in mind when developing your project. Once you have done so, send us a link to your public git repo, and please make sure not to commit the `node_modules` folder.
