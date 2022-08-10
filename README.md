![cover](.github/cover-project.jpg?style=flat)

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=BF5239&labelColor=09090A">
  <img src="https://img.shields.io/static/v1?label=IgniteLab&message=Rocketseat&color=BF5239&labelColor=09090A" alt="Ignite Lab" />
</p>

## 💻 Project [Web]
Application for listen one playlist or maybe manager some event with lessons.

## ✨ Technologies

-   [ ] Vite
-   [ ] React
-   [ ] Typescript
-   [ ] TailwindCSS
-   [ ] GraphQL
-   [ ] GraphQL CMS
-   [ ] GraphQL Codegen

## 🚀 Deploy

-   [ ] Vercel

## 🔖 Layout

You can view the project layout through [this link](https://www.figma.com/community/file/1120711251998877938).

## 🏁 Running the project

### Firt Step [Install dependencies]

```cl
npm install
```

### Second Step [GraphQL CMS and Config env file]

Create account on [this website](https://hygraph.com) and import the project with [this link](https://app.hygraph.com/clone/a5e8a7c7700049489ff86a174421246f?name=IgniteLab_MusicPlataform).

Create ```.env.local``` on root and put these variables:
```cl
VITE_API_URL={API_URL}
VITE_API_ACCESS_TOKEN={TOKEN}
```

**OBS: Just go into settings on GraphQL CMS and you can get this variables.

### Third Step [Generate GraphQL Codegen]

```cl
npm run codegen
```

### Last Step [Run]

For finally, run this project and open in your browser:

```ci
npm run dev
```

## 📄 Licença

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.
