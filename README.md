# Study Companion Mobile

A professional-grade mobile application built with **Expo** and **Supabase**, designed for seamless study management. This project leverages a **Feature-Based Architecture** to ensure clean separation of concerns and high scalability.

---

## `Tech Stack & Tools`

| Category          | Technology                                                                        |
| :---------------- | :-------------------------------------------------------------------------------- |
| **Framework** | [Expo](https://expo.dev/) (React Native)                                          |
| **Navigation** | [Expo Router](https://docs.expo.dev/router/introduction/) (File-based)            |
| **Backend** | [Supabase](https://supabase.com/) (Auth & Database)                               |
| **Data Fetching** | [TanStack Query v5](https://tanstack.com/query/latest) (Server State)             |
| **Security** | [Expo Secure Store](https://docs.expo.dev/versions/latest/sdk/secure-store/)      |
| **Styling** | [NativeWind](https://www.nativewind.dev/) (Tailwind CSS)                          |
| **Feedback** | [RN Toast Message](https://github.com/calintamas/react-native-toast-message)      |

---

## `App Architecture`

This project follows a **Feature-Based Structure**. Instead of grouping by file type (hooks, components), we group by domain logic.

## `Git Flow & Versioning`
I maintain two primary branches:
   * `main`: Production-ready code. Stable and tested.
   * `develop`: Integration branch for active development.