function ref_init() {
  jQuery(".ref").each(function(index) {
    jQuery(this).html('<a id="ref' + (index+1) + '"><span class="refnum" id="ref' + (index+1) + '" clicked="0">[' + (index+1) + ']</span><span class="refbody" style="display: none;">' + jQuery(this).html() + "</span></a>")
  });

  jQuery(function() {
    jQuery(".refbody").hide();

    jQuery(".refnum").click(function(event) {
      jQuery(this).attr("clicked", 1);
      jQuery(this.nextSibling).toggle();
      event.stopPropagation();
    });

    jQuery("body").click(function() {
      jQuery(".refbody").hide();
    });
  });
}

jQuery(document).ready(ref_init);