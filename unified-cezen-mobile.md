# Unified business mobile application

An Android application bringing selected internal services and workflows into a consolidated mobile experience.

**Scope:** Application integration, Android build and device-testing work; wider platform rollout is separate.

## The problem

Mobile users need coherent navigation and authentication while the underlying services continue to own business rules and data.

## My contribution

- Worked on service integration, mobile navigation, branding and authentication requirements.
- Supported the connection between business APIs and mobile workflows.
- Coordinated environment configuration, Android build packaging and device/emulator checks.
- Investigated connectivity and runtime behavior across client and backend boundaries.

## Architecture decisions

**Reuse service boundaries.** The mobile client consumes business APIs rather than creating a second independent store of business logic.

**Validate on devices.** A generated application package and a working authenticated device workflow are separate acceptance points.

## Delivery and outcome

Delivery covered Android packaging and integration troubleshooting with selected internal services. iOS expansion was exploratory and is not presented as a delivered release.

## Technology context

React Native, Expo, REST APIs, Android Studio, Gradle, ADB and Linux-hosted services.

[Back to portfolio](README.md)
