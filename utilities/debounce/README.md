# Debounce Utility

## What is Debouncing?

Debouncing is a performance optimization technique that limits how often a function executes.

Instead of running a function every single time an event occurs, the function waits for a pause before executing.

## Why It Matters

Without debouncing, expensive operations may run hundreds of times unnecessarily.

Examples:

* search input requests
* window resizing
* scroll listeners
* auto-save systems

## Real World Example

A search bar should not send an API request on every keystroke.

Instead:

* user types
* timer resets continuously
* request only fires after typing stops

This improves:

* performance
* API efficiency
* user experience

## Goal

Build a reusable debounce utility from scratch and understand how closures and timers work internally.
