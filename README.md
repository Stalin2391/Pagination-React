# 📄 **React Pagination - Step-by-Step Guide**

This guide explains how to implement basic pagination in a React application using dummy product data. The focus is on functionality, not styling. Styling can be added later when you have time or when the pagination logic is working correctly.

## 🧰 **1. Create Dummy JSON Data**

Prepare a dummy JSON file that contains an array of products.  
Each product should include at least a **`title`** and an **`image`**.  
You may include additional fields if needed.

## 🔄 **2. Fetch Products with `useState` and `useEffect`**

Use the **`fetch` API** to retrieve all products from the JSON file.  
Store the response data using the **`useState`** hook for further use in your component.

## 🧩 **3. Map and Render Products**

Use the **`.map()`** function to iterate over the product array  
and render each item in your component.

## 🧱 **4. Create a Product Card Component**

Build a reusable **`ProductCard`** component to display individual product information.  
Pass each product as props.  
Show the **title** and **image**, and optionally display other fields if needed.

## 🔢 **5. Limit Items Per Page**

For pagination, decide on a fixed number of products per page.  
Example: Show **10 items per page**.

## 📊 **6. Implement Pagination Logic**

Calculate which products to display on the current page.  
This involves slicing the original array based on the selected page number.

## 🖱️ **7. Handle Page Change**

Create a function like **`handlePageChange()`** that updates the current page  
when the user clicks a different page number.

## ⏮️ ⏭️ **8. Add Previous & Next Buttons**

Add **"Prev"** and **"Next"** buttons to allow navigation between pages.

- **"Prev"** takes the user to the previous page
- **"Next"** moves the user to the next page

## 🎯 **9. Highlight Active Page**

Add a simple **CSS class** to visually highlight the active page number.  
For example, change the background color or font style for the selected page.
