# FOSSEE Workshops

This branch is called ui-responsive. The actual UI redesign is in the [ui-modernization](https://github.com/jayanthwritescode/workshop_booking/tree/fossee-st-ui-modernization) branch. This branch had a different goal: get the Django backend running properly without touching the database models or business logic. The codebase is pretty old and had some issues that needed fixing just to get it to run in the first place. Once it was running, the focus was purely on ensuring the Django templates and admin interface work correctly. No new features, no design changes, just fixing configuration and dependency issues.

## Demo

https://github.com/user-attachments/assets/8f845e6c-5229-4594-a985-c16a772f4404

## Setup

Clone the repo and set up the Django environment:

```bash
git clone https://github.com/jayanthwritescode/workshop_booking.git
cd workshop_booking
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py runserver
```

The Django development server will start on port 8000. Note that the original repo had some dependency and configuration issues that were fixed in this branch so it should run even if the original did not.

## What this branch does

The project did not run out of the box. There were missing dependencies, outdated package versions, and some configuration files that needed to be updated just to get the dev server working. The requirements.txt was updated with compatible versions of Django and other libraries, and the settings configuration was fixed to resolve import errors and database connection issues.

Once the project was running, the focus shifted to ensuring the Django templates and admin interface work properly. The templates were checked for proper rendering and the admin interface was verified to be accessible. Any configuration issues that prevented the application from starting were resolved. The database migrations were run to ensure the database schema is up to date.

## My approach

I decided to focus on getting the Django backend running properly without making any changes to the database models or business logic. The goal was purely to fix configuration and dependency issues so the application would start and work as intended. I tested the application by running the development server and checking the admin interface and basic views to ensure they render correctly. The hardest part was identifying which configuration files needed to be updated to resolve import errors and database connection issues. The trade-off was that some deprecated features might still exist, but the application at least runs and functions as it was originally intended.

## Submission Checklist

- [x] Code is readable and well-structured
- [x] Git history shows progressive work (no single commit dumps)
- [x] README includes reasoning answers and setup instructions
- [x] Screenshots or live demo link included
- [ ] Code is documented where necessary
