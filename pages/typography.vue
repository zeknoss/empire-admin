<template>
    <ea-main-section class="main-section">
        <b-card-group columns>
            <b-card title="Headings">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
                <hr>
                <h1 class="display-1">Display 1</h1>
                <h2 class="display-2">Display 2</h2>
                <h3 class="display-3">Display 3</h3>
                <h4 class="display-4">Display 4</h4>
            </b-card>

            <b-card title="Paragraphs">
                <p class="lead">This is a lead paragraph. Facilisis in pretium nisl aliquet.</p>
                <p>Lorem ipsum dolor sit amet, ad elitr laudem appetere qui, <strong>iuvaret epicuri hendrerit sed ad</strong>. Oblique ceteros nominati ut vel, usu falli tamquam sadipscing eu. Pri idque reprimique no, nam porro vivendum definiebas et, at nisl sadipscing eam. Est utinam albucius maiestatis te, lucilius eloquentiam eu sea. No eam dolor partem integre. Pro no mundi feugiat rationibus, aeque definitionem cu per. </p>
                <p>Vel nusquam argumentum <abbr title="attribute">Definitiones</abbr> no, vis id agam graece sadipscing. Cum clita <strong class="text-purple">virtute feugait</strong> an, modus feugiat reformidans ne vim, usu sumo comprehensam cu. Tale prompta sit ea, pri at ubique ornatus erroribus. At vim summo causae quaeque.</p>
            </b-card>

            <b-card title="Blockquotes">
                <blockquote class="blockquote">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer class="blockquote-footer">Someone famous in Source Title</footer>
                </blockquote>
                <hr>
                <blockquote class="blockquote text-center">
                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
                <hr>
                <blockquote class="blockquote text-right">
                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
            </b-card>

            <b-card>
                <b-card-body class="pb-1">
                    <h4>Unordered Lists</h4>
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>Nulla volutpat aliquam velit</li>
                    </ul>
                </b-card-body>
                <b-card-body class="pt-0 pb-1">
                    <hr>
                    <h4 class="pt-3">Ordered Lists</h4>
                    <ol>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>Nulla volutpat aliquam velit</li>
                    </ol>
                </b-card-body>
                <b-card-body class="pt-0">
                    <hr>
                    <h4 class="pt-3">Unstyled Lists</h4>
                    <ul class="list-unstyled">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>Nulla volutpat aliquam velit</li>
                    </ul>
                </b-card-body>
            </b-card>

            <b-card title="Description Lists">
                <dl class="row">
                    <dt class="col-sm-4">Description lists</dt>
                    <dd class="col-sm-8">A description list is perfect for defining terms.</dd>

                    <dt class="col-sm-4">Euismod</dt>
                    <dd class="col-sm-8">
                        <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                        <p>Donec id elit non mi porta gravida at eget metus.</p>
                    </dd>

                    <dt class="col-sm-4">Malesuada porta</dt>
                    <dd class="col-sm-8">Etiam porta sem malesuada magna mollis euismod.</dd>

                    <dt class="col-sm-4 text-truncate">Truncated term is truncated</dt>
                    <dd class="col-sm-8">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

                    <dt class="col-sm-4">Nesting</dt>
                    <dd class="col-sm-8">
                        <dl class="row">
                            <dt class="col-sm-4">Nested definition list</dt>
                            <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                        </dl>
                    </dd>
                </dl>
            </b-card>
        </b-card-group>
    </ea-main-section>
</template>

<script>
    export default {
        name: "typography"
    }
</script>
