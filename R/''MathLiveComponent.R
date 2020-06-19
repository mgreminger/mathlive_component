# AUTO GENERATED FILE - DO NOT EDIT

''MathLiveComponent <- function(id=NULL, label=NULL, latex=NULL) {
    
    props <- list(id=id, label=label, latex=latex)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MathLiveComponent',
        namespace = 'mathlive_component',
        propNames = c('id', 'label', 'latex'),
        package = 'mathliveComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
