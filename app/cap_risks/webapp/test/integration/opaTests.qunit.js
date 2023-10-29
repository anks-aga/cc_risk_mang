sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'nz/caprisks/test/integration/FirstJourney',
		'nz/caprisks/test/integration/pages/RisksList',
		'nz/caprisks/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('nz/caprisks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);