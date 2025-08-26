export function useMDXComponents(components) {
    return {
        ...components,
        YouTube,
        Image,
        pre: Pre,
        code: (props) => {
            const { className, children } = props;
            if (className) {
                return <Code {...props} />;
            }
            return <InlineCode>{children}</InlineCode>;
        },
        // Add other component mappings as needed
    };
}
