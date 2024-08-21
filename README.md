# React + Vite

Stworzyłem projekt kalendarza w React, aby zaprezentować swoje umiejętności frontendowe. Aplikacja pozwala na dynamiczne zarządzanie wydarzeniami, z możliwością ich dodawania, edytowania i usuwania. Projekt jest responsywny, co oznacza, że działa dobrze na różnych urządzeniach. Dzięki temu projektowi mogłem pokazać swoje umiejętności w tworzeniu interaktywnych interfejsów użytkownika oraz efektywne zarządzanie stanem aplikacji.

Demo projektu dostępne jest pod adresem https://well-js-test-project.vercel.app/

# Użyte technologie

- React - cały projekt został oparty na React
- React Sheduler - główny koncept czyli stworzenie kalendarza wydarzeń dla użytkownika, jego działanie zostało oparte na tej bibliotece
- MaterialUI - stylizacja wyglądu wydarzeń, siatka dzienna, oraz okna zostały domyślnie wystilizowane przez biblioteke react sheduler w oparciu o materialUI
- Firebase - Aplikacja łączy się z firestore w którym przechowywane są wydarzenia jako osobne dokumenty

# Wyniki projektu

Projekt został oparty o biblioteke react-sheduler.
Kalendarz jest w jezyku polskim.
Dostępne są operacje CRUD na wydarzeniach.
Kalendarz obsługuje widoki dzienny, tygodzniowy i miesięczny.
Aplikacja jest połączona i korzysta z firebase.

# Błędy i Bugi

W bazie danych wydarzenia są zapisywane zgodnie ze strefą czasową +0.
Nie wpływa to na działanie aplikacji gdyż wczytywane są znowu konwertowane na strefe +2.
