import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import os

# Project Settings, Service Accounts, Create Service Account, and then
# Generate New Private Key
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "YOUR_FILE_NAME_HERE.json"
# Use the application default credentials. The projectID is obtianed
# by going to Project Settings and then General.
cred = credentials.ApplicationDefault()
firebase_admin.initialize_app(cred, {
 'projectId': 'YOUR_PROJECT_NAME_HERE',
})
# Get reference to database
db = firestore.client()


