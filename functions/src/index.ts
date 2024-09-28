/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
import * as admin from "firebase-admin";
admin.initializeApp();
export const firestoreInstance = admin.firestore();
import {onRequest} from "firebase-functions/v2/https";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const createTestUser = onRequest(async(request, response) => {
 try {
    await firestoreInstance.collection("Users").doc().set({
        userName:"TestUser1"
    }) 
 } catch (error) {
    throw error
 }
});
