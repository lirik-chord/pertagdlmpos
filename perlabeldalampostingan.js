    function showrecentposts(json)

    {

        for (var i = 0; i < numposts; i++)

        {

            var entry = json.feed.entry[i];

            var posttitle = entry.

            title.$t;

            var posturl;

            if (i == json.feed.entry.length) break;

            for (var k = 0;

                k < entry.link.length;

                k++) {
                if (entry.link[k].rel == 'alternate') {
                    posturl = entry.link[k].href;
                    break;

                }
            }

            posttitle = posttitle.link(posturl);

            if (standardstyling) document.write('<li>');

            document.write(posttitle);

        }

        if (standardstyling) document.write('</li>');
    }
</script>

<!-- end Script yang pertama-->

<!-- Script yang Kedua-->

<script type="text/javascript">
    var numposts = 5; <!--jumlah postingan yang akan muncul -->

    var showpostdate = true;
    var showpostsummary = true;
    var numchars = 100; <!--jumlah teks yang akan muncul -->

    var standardstyling = true;
