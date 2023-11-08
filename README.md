# 🔼 NextJS Application: Portafolio

## 📝 Description

A fullstack application made with NextJS, React, Node, MongoDB, OpenAI API.

## 👀 Live Production Site

- [Website URL](https://marceloandres.cl)

## 📂 Installation

It is intended on Ubuntu Server LTS, running on a AWS EC2 server, to be run as a systemd service.

1. Clone the repository:

```bash
git clone https://github.com/MarceloAndresMendoza/marceloandres
```
2. CD into the directory and run install.sh:

```bash
cd marceloandres
./install.sh
```
3. Check the running status of the service:

```bash
sudo systemctl status marceloandres
```
## 📚 Libraries

- NextJS: a FullStack React Framework that can be used to build static and dynamic websites and web applications. Can use prebuilt pages and components, and can be deployed as a static site, a server rendered app, or a fullstack app.
- React: a JavaScript library for building user interfaces.
- Node: a JavaScript runtime built on Chrome's V8 JavaScript engine.
- MongoDB: a document-oriented NoSQL database used for high volume data storage.
- OpenAI API: a powerful API that can be used to generate text, images, and more. In this case, it is use to moderate the comments section of the blog autonomously.

## 📖 Usage

The application is intended to be used as a portfolio, with a comment section that is moderated by the OpenAI API. It includes an API to serve the comments section, not needed to be served as another service.

## 📷 Design

It uses a modern condensed font, on a bento box layout, with a dark theme. It is intended to be simple and easy to use, with a minimalistic design.

## Thanks

I would like to thank the following people for their help and support:
- My family, for their support and love. To my lovely wife Camila, for her patience on the long nights I spent working and studying.
- My friends, for their support and encouragement. Special thanks to Miguel Reyes. (Even when ignoring my videos, he always feed me a constant stream of memes and funny videos to keep me going)
- My teachers, for their guidance and knowledge:
    - [Brayan Díaz](https://github.com/brayandiazc) for encouraging me to learn, his guidance and knowledge. His always positive attitude and availability to help anyone.
    - [Alan García](https://github.com/aegarmus) for his enthusiasm, great attitude and knowledge, and for encouraging us to learn NextJS, and his amazing feedback on my projects.
- And you, for taking the time to read this.