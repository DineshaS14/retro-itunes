# **Retro iTunes Media App**

Welcome to the **Retro iTunes Media App**, a project created for the **CODEDEX 2024 Mini Winter Hackathon**. This web application blends **retro aesthetics** with modern web functionality, allowing users to explore music, movies, podcasts, and TV shows using the **iTunes API**.  

The app features vibrant glowing designs, interactive grids, and media search capabilities while delivering an engaging retro-inspired experience.  

---

## **Table of Contents**

1. [Project Overview](#project-overview)  
2. [Features](#features)  
3. [Technologies Used](#technologies-used)  
4. [File Structure](#file-structure)  
5. [Setup Instructions](#setup-instructions)  
6. [API Integration](#api-integration)  
7. [Assets and Media](#assets-and-media)  
8. [Credits](#credits)  

---

## **Project Overview**

The **Retro iTunes Media App** combines **functional media search** with a carefully crafted retro-styled interface:  
- Uses the **iTunes Search API** to provide dynamic media results.  
- Includes vibrant glowing effects and animations for an immersive user experience.  
- Features custom-designed images and assets created using **DALL·E AI Generator**.  

The project was developed as part of the **CODEDEX 2024 Mini Winter Hackathon**, encouraging creativity and technical innovation.  

---

## **Features**

### **1. Landing Page (index.html)**  
- A retro-themed home page with:  
  - Grid layouts featuring **interactive images**.  
  - Giphy embeds for dynamic visuals.  
  - Links to the **Media Lookup** and **Contact Me** pages.  
- Designed with glowing pink and cyan hover effects for a nostalgic aesthetic.  

### **2. Media Lookup Page (lookupMedia/index.html)**  
- Search functionality powered by the **iTunes API**.  
- Features:  
  - Search bar to input media queries.  
  - Dropdown menu for selecting media types (Music, Movies, Podcasts, TV Shows).  
  - Results dynamically displayed as a grid with images, titles, and artists.  
- Clean and responsive layout.  

### **3. Contact Page (Contact/index.html)**  
- A stylish contact form with:  
  - Name, email, and message input fields.  
  - Submit button integrated with **Formspree** for handling messages.  
  - Back button for easy navigation.  

### **4. Responsive Design**  
- Fully responsive across all devices: mobile, tablet, and desktop.  

### **5. Retro Aesthetic**  
- Dark-themed UI with:  
  - Pink and cyan glowing effects on buttons, images, and text.  
  - Hover animations for an interactive retro vibe.  

---

## **Technologies Used**  

- **HTML5**: Structure of the web app.  
- **CSS3**: Styling, glowing effects, grid layouts, and responsiveness.  
- **JavaScript**: Dynamic functionality and API integration.  
- **iTunes Search API**: Fetching media results.  
- **Formspree**: Email form submission service.  
- **DALL·E AI**: Custom images generated for the app.  

---

## **File Structure**  

```plaintext
Retro-iTunes-Media-App/
│
├── index.html                 # Landing Page
├── lookupMedia/
│   ├── index.html             # Media Lookup Page
│   ├── lookupMedia.js         # JavaScript for API Integration
│
├── Contact/
│   └── index.html             # Contact Page
│
├── styles.css                 # Global CSS file
├── images/                    # Contains custom images (DALL·E Generated)
│   ├── background.webp
│   ├── search.png
│   ├── cassette.png, etc.
│
└── README.md                  # Documentation file
```

---

## **Setup Instructions**  

1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/yourusername/retro-itunes-media-app.git
   cd retro-itunes-media-app
   ```

2. **Run the Project**:  
   Open `index.html` in any modern web browser.  

3. **Dependencies**:  
   - Ensure you have a working internet connection for the iTunes API.  
   - No additional installations required.  

---

## **API Integration**  

The app integrates with the **iTunes Search API**:  
- **API Endpoint**: `https://itunes.apple.com/search`  
- **Request Parameters**:  
  - `term`: Search query entered by the user.  
  - `media`: Media type (music, movie, podcast, or TV show).  
  - `limit`: Limits results to 10 items.  

**Example Request**:  
```url
https://itunes.apple.com/search?term=rock&media=music&limit=10
```

---

## **Assets and Media**  

- All custom images used in the project (e.g., background, search icons, cassette images) were generated using **DALL·E AI Generator** to maintain a unique and retro aesthetic.  
- Gifs are embedded using **Giphy** for dynamic visuals.  

---

## **Credits**  

- **iTunes Search API**: For fetching media data.  
- **DALL·E AI**: For generating custom images.  
- **Formspree**: For handling form submissions.  
- **Giphy**: For providing embedded visual content.  
- **CODEDEX 2024 Mini Winter Hackathon**: For the opportunity to create this project.  

---

## **Demo Link**  
You can view the live project [here](https://your-deployed-link.com).  

---

Thank you for checking out this project! 🚀
