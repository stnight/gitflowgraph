/**
 * Created by night on 7/20/16.
 */
var templateConfig = {
    colors: ['#565253', '#E95F42', '#3E9DE9', '#009B2A', '#E9005B', '#33957b', '#a81d1d'],
    branch: {
        lineWidth: 3,
        spacingX: 25,
        showLabel: false
    },
    commit: {
        spacingY: -60,
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
    author: 'John Eric Orolfo <earljohn3ric@gmail.com>',
    orientation: 'vertical-reverse'
});
// Begin Git Activity
var master = gitGraph.branch('master'),
    fBranch_1, fBranch_2, fBranch_3, rcBranch_1, rcBranch_2, fBranch_4, bBranch_4_1;
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
    tag: 'rc-1-0.0.1'
});
rcBranch_1.merge(master, {
    message: 'New version of master, deployed on production',
    author: releaseEngineer
});
fBranch_2.commit('Another Image Upload');
fBranch_4 = gitGraph.branch({
    parentBranch: master,
    name: 'f_projName_0004_level-selection',
    column: 5
});
fBranch_4.commit('Initial commit for this activity').commit('created new Library for level management');
bBranch_4_1 = gitGraph.branch({
    parentBranch: fBranch_4,
    name: 'b_projName_0005_invalid-syntax',
    column: 6
});
bBranch_4_1.commit('New object implemented to contain the status').commit('added new files');
bBranch_4_1.merge(fBranch_4, {
    message: 'Merge activity for QA phase'
});
master.checkout();
rcBranch_2 = gitGraph.branch({
    name: 'i_projName_0002-0004_merged-featured-branches',
    column: 4
});
fBranch_4.merge(rcBranch_2, {
    message: 'merge activity',
    author: releaseEngineer
});
fBranch_2.merge(rcBranch_2, {
    message: 'merge activity',
    author: releaseEngineer
});
rcBranch_2.commit({
    message: 'Passed QAT, chaging the app version',
    author: releaseEngineer,
    tag: 'rc-1-0.0.2'
});
rcBranch_2.merge(master, {
    author: releaseEngineer
})
