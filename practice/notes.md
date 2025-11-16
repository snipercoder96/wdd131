📝 Mistakes Recap
    Properties vs. Methods

    Tried to call innerHTML() with parentheses instead of assigning to innerHTML.

    Tried to chain .style after classList.toggle(), forgetting that toggle() returns a boolean, not the element.

    Variable Naming

    Declared toggleButton1 but used toggleButton in the event listener.

    Inconsistent naming caused reference errors.

    Target Element Confusion

    Applied styles to the button instead of the heading (the challenge required toggling the heading’s style).

    Forgot to define the .highlight class in CSS, so toggling had no visible effect.

    Alert Usage

    Wrote alert.alertButton instead of calling alert("message").

    Passed two arguments to alert() (alert(alertButton, textAlert)), but alert() only accepts one.

    Empty Content

    <h1> was styled but had no text, so the CSS effect wasn’t visible.

✅ Lessons Learned
    Properties (like innerHTML, textContent, style) → use assignment (=).

    Methods (like addEventListener(), classList.toggle()) → use parentheses (()).

    Consistency in variable names prevents reference errors.

    Define CSS classes before toggling them, otherwise no visual change occurs.

    Target the right element — always double‑check whether you’re styling the button or the heading.

    Alert only takes one argument, usually a string.