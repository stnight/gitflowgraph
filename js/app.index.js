/**
 * Created by night on 7/20/16.
 */
var templateConfig = {
    colors: ['#565253', '#E95F42', '#3E9DE9', '#009B2A', '#E9005B'],
    branch: {
        lineWidth: 3,
        spacingX: 50,
        showLabel: false
    },
    commit: {
        spacingY: -70,
        dot: {
            size: 12
        },
        message: {
            displayAuthor: true,
            displayBranch: true,
            displayHash: true,
            font: 'normal 10pt Arial'
        },
        tooltipHTMLFormatter: function (commit) {
            return "" + commit.sha1 + "" + ": " + commit.message;
        }
    }
};
var releaseEngineer = 'RE Team <reteam@mail.com>';
var myTemplate = new GitGraph.Template(templateConfig);
var gitGraph = new GitGraph({
    template: myTemplate,
    author: 'John Eric Orolfo <earljohn3ric@gmail.com>'
});
// Begin Git Activity
var master = gitGraph.branch('master'),
    fBranch_1, fBranch_2, fBranch_3, rcBranch_1;
master.commit('Initial Commit').commit('Uploaded the base JS/CSS and other 3rd party libraries.').commit('Another uploads needed');
fBranch_1 = gitGraph.branch({
    parentBranch: master,
    name: 'f_projName_0001_poc-phase',
    column: 1
});
fBranch_2 = gitGraph.branch({
    parentBranch: master,
    name: 'f_projName_0002_hd-images',
    column: 2
});
fBranch_1.commit('Reconfigured the config files').commit('Uploaded new js files for HUD');
fBranch_2.commit('Initial commit for this task');
fBranch_1.commit('Text change');
fBranch_2.commit('Upload the HD images for future usage');
fBranch_3 = gitGraph.branch({
    parentBranch: master,
    name: 'f_projName_0003_settings-page',
    column: 3
});
fBranch_1.commit('Added .ignore file');
fBranch_3.commit('Uploaded the js files for settings page').commit('Clearing the data').commit('Difficulty settings');
fBranch_2.commit('Used the HD images');
master.checkout();
rcBranch_1 = gitGraph.branch({
    parentBranch: master,
    name: 'i_projName_0001-0002-0003_merged-feature-branch',
    column: 4
});
rcBranch_1.commit('Initial commit for the integration branch');
fBranch_1.merge(rcBranch_1, {
    message: 'Merge Activity',
    author: releaseEngineer
});
fBranch_2.merge(rcBranch_1, {
    message: 'Merge Activity',
    author: releaseEngineer
});
fBranch_3.merge(rcBranch_1, {
    message: 'Merge Activity',
    author: releaseEngineer
});
rcBranch_1.commit({
    message: 'PASSED ON QAT, clear for production',
    author: releaseEngineer,
    tag: '0.0.1'
});
rcBranch_1.merge(master, {
    message: 'New version of master, deployed on production',
    author: releaseEngineer
});
fBranch_2.commit('Another Image Upload');

