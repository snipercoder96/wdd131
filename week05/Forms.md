# 🌐 What aria Means in HTML
- ARIA stands for Accessible Rich Internet Applications.

- It’s a set of attributes you can add to HTML elements to improve accessibility, especially for users who rely on screen readers or other assistive technologies.

- ARIA helps describe roles, states, and properties of elements that aren’t always clear from plain HTML.


# 📝 Accessibility Guidance
- Order matters: Don’t rearrange form controls with CSS; keep HTML order consistent for screen readers.

- Validation alignment: Place error messages next to inputs for easy reading with magnifiers.

- Proper markup: Use `<fieldset>` and `<legend>` to group related controls for better navigation.

- Vertical layouts: Stack form blocks vertically to aid users with limited vision.



# 🚫 Disabled States
- Avoid disabling inputs — they reduce contrast, confuse users, and block keyboard navigation.

- If disabled states are necessary:

- Explain why with helper text or tooltips.

- Use aria-disabled="true" instead of disabled for accessibility.

- Programmatically disable with JavaScript to prevent clicks.

- Ensure color contrast meets accessibility standards.


# ⭐ Required & Optional Fields
- Mark required fields with a red asterisk ()* and explain its meaning at the top of the form.

- Use the required attribute for enforcement.

- Label optional fields with “(optional)”.

- Provide clear error messages when required fields are left blank, including alerts for screen readers.


# 📱 Screen Reader Issues
- VoiceOver on iOS: Doesn’t support `<fieldset>` and `<legend>`; workaround is aria-labelledby.

- VoiceOver on macOS: Partial support for aria-describedby; limited support for role="alert".

- Compatibility varies across versions, so testing is essential.


# ⚙️ Form Settings
$theme-form-font-family controls the font family for forms.