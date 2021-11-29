@include('includes.header')
@include('includes.sidebar')

@yield('content')
<!-- END PAGE BREADCRUMB -->
<!-- BEGIN PAGE BASE CONTENT -->


<!-- END PAGE BASE CONTENT -->
</div>
<!-- END CONTENT BODY -->
</div>
<!-- END CONTENT -->
<!-- BEGIN QUICK SIDEBAR -->
<a href="javascript:;" class="page-quick-sidebar-toggler">
    <i class="icon-login"></i>
</a>

<!-- END QUICK SIDEBAR -->
</div>
<!-- END CONTAINER -->
<!-- BEGIN FOOTER -->
<div class="page-footer">
    <div class="page-footer-inner"> 2021 &copy; PurnamaTech
        <a target="_blank" href="http://keenthemes.com">Prabs</a> &nbsp;|&nbsp;
        <a href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes"
            title="Purchase Metronic just for 27$ and get lifetime updates for free" target="_blank">Purchase
            Metronic!</a>
    </div>
    <div class="scroll-to-top">
        <i class="icon-arrow-up"></i>
    </div>
</div>

<script>
    window.setTimeout(function() {
        $(".alert").fadeTo(500, 0).slideUp(500, function() {
            $(this).remove();
        })
    }, 4000);
</script>
<script src="{{asset('template/theme')}}/assets/global/plugins/jquery.min.js" type="text/javascript">
</script>
<script src="{{asset('template/theme')}}/assets/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript">
</script>
<script src="{{asset('template/theme')}}/assets/global/plugins/js.cookie.min.js" type="text/javascript">
</script>
<script src="{{asset('template/theme')}}/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js"
    type="text/javascript"></script>
<script src="{{asset('template/theme')}}/assets/global/plugins/jquery.blockui.min.js" type="text/javascript">
</script>
<script src="{{asset('template/theme')}}/assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js"
    type="text/javascript"></script>
<!-- END CORE PLUGINS -->
<!-- BEGIN PAGE LEVEL PLUGINS -->

<!-- untuk sweet alert -->

<script src="{{asset('template/plugins')}}/sweet/sweetalert2.all.min.js" type="text/javascript"></script>
<script src="{{asset('template/plugins')}}my.js" type="text/javascript"></script>
<script src="{{asset('template/theme')}}/assets/global/plugins/bootstrap-table/bootstrap-table.min.js"
    type="text/javascript"></script>

<script src="{{asset('template/theme')}}/assets/pages/scripts/table-bootstrap.min.js" type="text/javascript">
</script>
<script src="{{asset('template/js')}}/new.js" type="text/javascript"></script>

<script src="{{asset('')}}template/plugins/chart.js/Chart.min.js"></script>
<script src="{{asset('')}}template/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="{{asset('')}}template/plugins/datatables/dataTables.bootstrap4.min.js"></script>
<script src="{{asset('')}}template/plugins/datatables/datatables-demo.js"></script>

<script src="{{asset('template/theme')}}/assets/global/plugins/counterup/jquery.waypoints.min.js"
    type="text/javascript"></script>
<script src="{{asset('template/theme')}}/assets/global/plugins/counterup/jquery.counterup.min.js"
    type="text/javascript"></script>
<script src="{{asset('template/plugins/highcart')}}/highcharts.js"></script>
<script src="{{asset('template/plugins/highcart')}}/highcharts-more.js"></script>
<script src="{{asset('template/plugins/highcart')}}/exporting.js"></script>
<script src="{{asset('template/plugins/highcart')}}/export-data.js"></script>
<script src="{{asset('template/plugins/highcart')}}/accessibility.js"></script>

<!-- BEGIN THEME GLOBAL SCRIPTS -->
<script src="{{asset('template/theme')}}/assets/global/scripts/app.min.js" type="text/javascript"></script>
<!-- END THEME GLOBAL SCRIPTS -->
<!-- BEGIN PAGE LEVEL SCRIPTS -->

<!-- END PAGE LEVEL SCRIPTS -->
<!-- BEGIN THEME LAYOUT SCRIPTS -->
<script src="{{asset('template/theme')}}/assets/layouts/layout4/scripts/layout.min.js" type="text/javascript">
</script>
<script src="{{asset('template/theme')}}/assets/layouts/layout4/scripts/demo.min.js" type="text/javascript">
</script>
<script src="https://unpkg.com/survey-jquery@1.8.77/survey.jquery.min.js"></script>


@stack('before-script');
@stack('after-script');

<!-- END THEME LAYOUT SCRIPTS -->
</body>

</html>
