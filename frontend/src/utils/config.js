export const urls = {
    frontend: 'localhost:3000',
    backend: 'localhost:8000',
}


export const editor_config = {
    toolbarGroups: [
        { name: 'clipboard', groups: ['clipboard', 'undo'] },
        { name: 'document', groups: ['mode', 'document', 'doctools'] },
        { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
        { name: 'forms', groups: ['forms'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
        { name: 'links', groups: ['links'] },
        { name: 'insert', groups: ['insert'] },
        '/',
        { name: 'styles', groups: ['styles'] },
        { name: 'colors', groups: ['colors'] },
        { name: 'tools', groups: ['tools'] },
        { name: 'others', groups: ['others'] },
        { name: 'about', groups: ['about'] },
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] }
    ],
    removeButtons: 'Copy,Cut,Paste,PasteText,PasteFromWord,Find,Replace,Scayt,SelectAll,Radio,Form,TextField,Textarea,Checkbox,Select,Button,ImageButton,HiddenField,CopyFormatting,RemoveFormat,Unlink,Anchor,Flash,HorizontalRule,Format,Styles,About',
    fontSize_sizes: 'x-small;small;medium;large;x-large;12/12px;16/16px;18/18px;20/20px;24/24px;36/36px;48/48px/;72/72px',
    allowedContent: true,
    extraPlugins: 'font, exportpdf, specialchar, smiley'
}
