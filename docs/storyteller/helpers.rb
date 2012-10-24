module StoryTeller
  module Helpers
    def guide(name, url, options = {}, &block)
      link = content_tag(:a, :href => url) { name }
      result = content_tag(:dt, link)

      if ticket = options[:ticket]
        result << content_tag(:dd, lh(ticket), :class => 'ticket')
      end

      result << content_tag(:dd, capture(&block))
      concat(result)
    end

    def author(name, nick, image = 'credits_pic_blank.gif', &block)
      image = "images/#{image}"

      result = content_tag(:img, nil, :src => image, :class => 'left pic', :alt => name)
      result << content_tag(:h3, name)
      result << content_tag(:p, capture(&block))
      concat content_tag(:div, result, :class => 'clearfix', :id => nick)
    end

    def code(&block)
      c = capture(&block)
      content_tag(:code, c)
    end

	def sample_code(name)
	    file_name = File.dirname(__FILE__) + "../../samples/#{name}.txt"
		code_content = IO.read(file_name)

		result = "<notextile><div class='code_container'><code class='html'>\n"
        result << code_content
        result << "\n</code></div></notextile>"
		concat result
	end
  end
end
