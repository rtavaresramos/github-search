# Github _Search_

A different way to find out what are your friends doing on github :)

## Problem description

Implement a client-side application, which queries the GitHub API and shows the repositories for a specific user. This application should work on the latest browsers on the market.

## Navigation
 - When searching for a user through the github login, redirect to the search result page.
 
- If the user is found to present the user's details, otherwise, display a friendly message.
 

## Requirements
- Me, as a user, wish to search for a GitHub user;
- Me, as a user, wish to see the details of this user that was searched for (organization, location, number of followers, repositories, and stars);
 - Me, as a user, wish to see the list of the repositories of the user who was searched for, ordered by decreasing number of stars;

## Definition of done
- It is required to use Vue JS and optionally, Nuxt.
- The layout must be implemented according to the specification below.
##### Home Screen:

 ![Layout from Figma](https://uploaddeimagens.com.br/images/002/780/850/full/Captura_de_Tela_2020-07-19_a%CC%80s_20.19.02.png?1595200989) 

##### Result Screen:

 ![Layout from Figma](https://uploaddeimagens.com.br/images/002/780/851/full/Captura_de_Tela_2020-07-19_a%CC%80s_20.20.39.png?1595201009) 



## How it was planned

Once I've never worked with VueJs before, I decided to begin this project coding a single file, with all my components at the same place. Going slow and keep based on the documentation I was sure it would be a great challenger.

### Learning VueJs

As I told you above, for this project I had to take the time to read the documentation and learn this new technology. To understand the structure and directives was not so hard, but including vue-router and components communication
trough props and $emit events into the project was a big challenger. But, in the end, it has all worked.

## How it was coded

I got started coding the screens just with HTML and CSS. Then, after finish that I started to use the Vue CLI. At the first moment, I coded all together in just one component, to make sure all requirements would be up to. Break the only one component in more components was really nice, Vue shows itself really god for doing the communication between parents and child components. After got all components working separately, I made a couple of tests about the user's search possibilities. It showed itself very stable.


## Ok, but how do I use it?
 It's already deployed on Netlify and you can find it out [Here](https://github-search.rtavaresramos.com.br/)
 1. ### Clone the repository
    
    $ git clone https://github.com/rtavaresramos/github-search.git

2. ####  Install dependencies
    ```
    yarn install
    ```

3. #### Compiles and hot-reloads for development
    ```
    yarn serve
    ```

4. #### Compiles and minifies for production
    ```
    yarn build
    ```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## And about the evaluation?

Well, this challenge really made me try my best. I spent hours learning how to do stuff in a library I never used before and I'm really into Vue, it wasn't that hard to code this, since Vue documentation really helps the programmer.

At first, I was excited about the new lib, so I assume maybe I made some mistakes when plannef the repo structures, but it was necessarry, cause I could see that if a have a bit more experience with that, I would do great things in a bigger way in this project... Learning to code in Vue came naturally as I needed to implement things, and I'm really satisfied about it.
