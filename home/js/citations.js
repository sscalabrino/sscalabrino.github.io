function get_citation(year, name) {
    citations = {
        '2017': {
            'icsesrcOdysseys' : 'To appear',
            'icseLibra': 'To appear',
            'msrASCAT': 'To appear',
            'freelancing': 'To appear'
        },
        
        '2016': {
            'ssbseSearch' : '@Inbook{Scalabrino2016,<br/>author="Scalabrino, Simone<br/>and Grano, Giovanni<br/>and Di Nucci, Dario<br/>and Oliveto, Rocco<br/>and De Lucia, Andrea",<br/>editor="Sarro, Federica<br/>and Deb,<br/>Kalyanmoy",<br/>title="Search-Based Testing of Procedural Programs: Iterative Single-Target or Multi-target Approach?",<br/>bookTitle="Search Based Software Engineering: 8th International Symposium, SSBSE 2016, Raleigh, NC, USA, October 8-10, 2016, Proceedings",<br/>year="2016",<br/>publisher="Springer International Publishing",<br/>address="Cham",<br/>pages="64--79",<br/>isbn="978-3-319-47106-8",<br/>doi="10.1007/978-3-319-47106-8_5",<br/>url="http://dx.doi.org/10.1007/978-3-319-47106-8_5"<br/>}',
            
            'icpcImproving': '@INPROCEEDINGS{7503707, <br/>author={S. Scalabrino and M. Linares-Vásquez and D. Poshyvanyk and R. Oliveto}, <br/>booktitle={2016 IEEE 24th International Conference on Program Comprehension (ICPC)}, <br/>title={Improving code readability models with textual features}, <br/>year={2016}, <br/>pages={1-10}, <br/>keywords={software maintenance;source code (software);text analysis;code readability models;code snippets;line length;program comprehension effort;software maintenance;software readability;source code;textual features;Computational modeling;Feature extraction;Semantics;Software quality;Syntactics;Visualization}, <br/>doi={10.1109/ICPC.2016.7503707}, <br/>month={May},}'
        }
    }
    
    return citations[year][name]
}
