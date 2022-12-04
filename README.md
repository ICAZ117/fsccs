# [FSC Computer Science - Offcial Department Website](https://fsc-cs.web.app/)

## Table of Contents
- [Project Setup](#setup)
- [Custom Components](#components)
  - [SkewBox](#SkewBox)

<a name="setup"/>

## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```

<hr/>

<a name="components"/>

# Custom Components

<a name="SkewBox"/>

## [SkewBox](src/components/SkewBox.vue)

Creates a full-width SkewBox (Two adjacent divs seperated diagonally) with support for custom background images

### Props
- **leftColor**: The background color of the left red-section. Defaults to the FSC red color. Must be set to `'transparent'` if a background image is desired instead.
- **rightColor**: The background color of the right red-section. Defaults to the FSC blue color. Must be set to `'transparent'` if a background image is desired instead.
- **leftBG**: An object containing information for the (optional) background image of the left red-section. See formatting for object [below](#SkewBoxLeftImage).
- **rightBG**: An object containing information for the (optional) background image of the left red-section. See formatting for object [below](#SkewBoxRightImage).
- **divisionPartition**: The percentage across the screen (measured from the left) where you want the division to be
- **height**: A numerical value corresponding to the desired height of the SkewBox (in pixels). Defaults to 500px.
- **padding**: A string containing the desired padding for the content inside the SkewBox. Does not affect the background image.

### Usage
Import the component into your Vue file, and then define it as a component in your script red-section, as follows:
```vue
<script>
  import SkewBox from "../components/SkewBox.vue";
  
  export default {
    components: {
      SkewBox,
    },
  };
</script>
```

Once the component has been defined in a file, then it is ready to be used. In order to populate either side of the SkewBox with content, v-slot templates are used, as follows:
```vue
<SkewBox>
  <template v-slot:left>Content on the left side</template>
  <template v-slot:right>Content on the right side</template>
</SkewBox>
```

### Samples

#### Standard SkewBox
```vue
<SkewBox>
  <template v-slot:left>
    <h1 style="color: white">Content on the left side</h1>
  </template>
  <template v-slot:right>
    <h1 style="color: white">Content on the right side</h1>
  </template>
</SkewBox>
```
![image](https://user-images.githubusercontent.com/71295552/188292675-5201a133-0fd2-4082-92af-f30bef818a55.png)


#### SkewBox with modified colors
```vue
<SkewBox
  :leftColor="'#0a0'"
  :rightColor="'#d70'"
  :height="600"
  :padding="'100px 20px 20px 100px'"
>
  <template v-slot:left>
    <h1 style="color: white">Content on the left side</h1>
  </template>
  <template v-slot:right>
    <h1 style="color: white">Content on the right side</h1>
  </template>
</SkewBox>
```
![image](https://user-images.githubusercontent.com/71295552/188292768-07ec9458-6c95-4c04-b45a-446a44dcccf1.png)

<a name="SkewBoxRightImage"/>

#### SkewBox with image on right side
```vue
<SkewBox
  :rightBG="{
    backgroundImage: `url(${require('@/assets/img/WCS.jpg')})`,
    'background-position': 'center',
  }"
  :rightColor="'transparent'"
  :height="600"
  :padding="'70px 0 60px 0'"
>
  <template v-slot:left>
    <h1 style="color: white">Content on the left side</h1>
  </template>
  <template v-slot:right></template>
</SkewBox>
```
![image](https://user-images.githubusercontent.com/71295552/188292827-a1d24395-8155-4d2f-a8e5-54ace5339da2.png)

<a name="SkewBoxLeftImage"/>

#### SkewBox with image on left side
```vue
<SkewBox
  :leftBG="{
    backgroundImage: `url(${require('@/assets/img/WCS.jpg')})`,
    'background-position': 'center',
  }"
  :leftColor="'transparent'"
  :height="600"
  :padding="'70px 0 60px 0'"
>
  <template v-slot:left></template>
  <template v-slot:right>
    <h1 style="color: white">Content on the right side</h1>
  </template>
</SkewBox>
```
![image](https://user-images.githubusercontent.com/71295552/188292864-d6196f37-8ba1-4c6f-bb7d-81f35b2de8ef.png)