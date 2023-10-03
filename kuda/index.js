
window.addEvent('domready',
    function() {

        var isMacDisplayed = false;
        var isMathsDisplayed = false;
        var isCSDisplayed = false;


        // Actions
        $('show-mac').addEvent('click', toggleMac);
        $('show-ml').addEvent('click', toggleMaths);
        $('show-cs').addEvent('click', toggleCS);


        // ----------------------------------------------------------------------------- //

        function toggleMac() {
            isMacDisplayed = !isMacDisplayed;
            if (!isMacDisplayed)
                $(document.body).getElements('.business-related-enabled').set({
                    'class': 'business-related'
                });
            else
                $(document.body).getElements('.business-related').set({
                    'class': 'business-related-enabled'
                });
        }

        function toggleMaths() {
            isMathsDisplayed = !isMathsDisplayed;
            if (!isMathsDisplayed)
                $(document.body).getElements('.ml-related-enabled').set({
                    'class': 'ml-related'
                });
            else
                $(document.body).getElements('.ml-related').set({
                    'class': 'ml-related-enabled'
                });
        }

        function toggleCS() {
            isCSDisplayed = !isCSDisplayed;
            if (!isCSDisplayed)
                $(document.body).getElements('.cs-related-enabled').set({
                    'class': 'cs-related'
                });
            else
                $(document.body).getElements('.cs-related').set({
                    'class': 'cs-related-enabled'
                });
        }
    }
);
