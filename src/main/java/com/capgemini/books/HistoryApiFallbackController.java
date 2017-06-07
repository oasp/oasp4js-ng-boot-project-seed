package com.capgemini.books;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HistoryApiFallbackController {
  /**
   * This handles forwarding to the index.html when bookmarking any client's dialog (whose path begins with 'app'
   * per convention). Such handling is necessary because the HTML5 history API is used in the client.
   *
   * @return forward to index.html (as default of '/')
   */
  @RequestMapping(value = "app/**", method = RequestMethod.GET)
  public String historyApiFallback() {
    return "forward:/";
  }
}
