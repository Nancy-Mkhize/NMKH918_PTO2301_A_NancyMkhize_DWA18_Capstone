import React, { useState } from "react";

export const useSort = (unsortedArray, sortOrder) => {

  if(!unsortedArray){
    return undefined;
  }

  let sortedArray = [...unsortedArray];

  if(sortOrder === 'A-Z') {
    sortedArray.sort((a, b) => {
      const nameA = a.title.toUpperCase(); 
      const nameB = b.title.toUpperCase(); 
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  if(sortOrder === 'Z-A') {
    sortedArray.sort((a, b) => {
      const nameA = a.title.toUpperCase(); 
      const nameB = b.title.toUpperCase(); 
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
  }

  if(sortOrder === 'oldest') {
    sortedArray.sort((a, b) => {
      const dateA = new Date(a.updated).getTime(); 
      const dateB = new Date(b.updated).getTime(); 
      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      return 0;
    });
  }

  if(sortOrder === 'newest') {
    sortedArray.sort((a, b) => {
      const dateA = new Date(a.updated).getTime(); 
      const dateB = new Date(b.updated).getTime(); 
      if (dateA > dateB) {
        return -1;
      }
      if (dateA < dateB) {
        return 1;
      }
      return 0;
    });
  }

  return sortedArray;
}