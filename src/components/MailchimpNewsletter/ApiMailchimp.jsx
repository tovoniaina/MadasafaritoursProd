import React from "react";

class SubscribePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: "",
    };
  }
  //   const MAILCHIMP_URL = "https://smartpredict.us5.list-manage.com/subscribe/post?u=f88c61744ec02e1f277979ea1&amp;id=981697cd4a&amp;f_id=00d685e9f0";

  render() {
    return (
      <form
        action="https://smartpredict.us5.list-manage.com/subscribe/post"
        method="POST"
        noValidate
      >
        <input type="hidden" name="u" value="f88c61744ec02e1f277979ea1" />
        <input type="hidden" name="id" value="00d685e9f0" />
        <label htmlFor="MERGE0">
          Email
          <input
            type="email"
            name="EMAIL"
            id="MERGE0"
            value={this.state.emailValue}
            onChange={(e) => {
              this.setState({ emailValue: e.target.value });
            }}
            autoCapitalize="off"
            autoCorrect="off"
          />
        </label>
        
        <input
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="button"
        />
      </form>
    );
  }
}

export default SubscribePage;
