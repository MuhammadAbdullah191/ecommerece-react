import { useState } from "react";
function Nav({changeUrl}) {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    changeUrl(search)
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between p-3">
  <a class="navbar-brand" href="#">ShopOnline</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      {/* <% if user_signed_in? %>
        <li class="nav-item">
          <%= link_to "Profile", "/users/"+current_user.id.to_s, :class=>"nav-link" %>
        </li>
      <%end%> */}
    </ul>
    <div class="d-flex flex-row">
      {/* <%if total_cart_items%>
        <%=   link_to cart_path(@cart), class:" s button is-warning" do%>
          <span class="icon is-small">
            <i class="fa fa-shopping-cart">
            </i>
          </span>
          <span>
            Cart
            <%= cart_count_over_one%>
          </span>
        <%end%>
      <%end%> */}
      <div class="m-2">
        {/* <%= search_form_for @q do |f| %>
          <%# <%= f.label :name_cont %>
          <%= f.search_field :name_cont %>
          <%= f.submit %> */}
          <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      <input type="submit" />
    </form>
        </div>
      {/* <% end %> */}
      {/* <% if user_signed_in? %>
        <div>
          <%= link_to  'Sign Out' , destroy_user_session_path, :method => :delete%>
          <%p " if current_user.avatar.present?" %>
          <%current_user.avatar.present? %>
          <%if current_user.avatar !=nil %>
            <%=image_tag(current_user.avatar ,alt: "avatar", class: "rounded-circle", id: "avatar",:alt => "rss feed", :height =>"60", :width => "60") if current_user.avatar.attached?%>
          <%end%>
        </div>
      <%else%>
        <%= link_to  'Sign In' , user_session_path%>
      <%end%> */}
    </div>
  </div>
</nav>
   );
}

export default Nav;
