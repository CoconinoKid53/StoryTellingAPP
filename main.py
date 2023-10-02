import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import os

# Project Settings, Service Accounts, Create Service Account, and then
# Generate New Private Key
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "storyboard-deb58-firebase-adminsdk-6ih4y-a6baa46db0.json"
# Use the application default credentials. The projectID is obtianed
# by going to Project Settings and then General.
cred = credentials.ApplicationDefault()
firebase_admin.initialize_app(cred, {
 'projectId': 'storyboard-deb58',
})
# Get reference to database
db = firestore.client()





