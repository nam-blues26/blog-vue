<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <div
      class="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
      <div class="os-resize-observer-host observed">
        <div class="os-resize-observer" style="left: 0px; right: auto;"></div>
      </div>
      <div class="os-size-auto-observer observed" style="height: calc(100% + 1px); float: left;">
        <div class="os-resize-observer"></div>
      </div>

      <div class="os-padding">
        <div class="os-viewport os-viewport-native-scrollbars-invisible">
          <div class="os-content" style="padding: 0px 8px; height: 100%; width: 100%;">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
              <div class="info">
                <a href="#" class="d-block">Vũ Hoài Nam</a>
              </div>
            </div>

            <div class="form-inline">
              <div class="sidebar-search-results">
                <div class="list-group"><a href="#" class="list-group-item">
                    <div class="search-title"><strong class="text-light"></strong>N<strong
                        class="text-light"></strong>o<strong class="text-light"></strong>
                      <strong class="text-light"></strong>e<strong class="text-light"></strong>l<strong
                        class="text-light"></strong>e<strong class="text-light"></strong>m<strong
                        class="text-light"></strong>e<strong class="text-light"></strong>n<strong
                        class="text-light"></strong>t<strong class="text-light"></strong>
                      <strong class="text-light"></strong>f<strong class="text-light"></strong>o<strong
                        class="text-light"></strong>u<strong class="text-light"></strong>n<strong
                        class="text-light"></strong>d<strong class="text-light"></strong>!<strong
                        class="text-light"></strong>
                    </div>
                    <div class="search-path"></div>
                  </a></div>
              </div>
            </div>

            <nav class="mt-2">
              <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                <li class="nav-item menu-is-opening menu-open">
                  <router-link to="/admin" class="nav-link active">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                      Blog
                      <i class="right fas fa-angle-left"></i>
                    </p>
                  </router-link>
                  <ul class="nav nav-treeview" style="display: block;">
                    <li class="nav-item">
                      <router-link to="/admin/add-blog" class="nav-link d-flex align-items-center"><span class="material-icons">
arrow_right
</span>
                        <p>Add blog</p></router-link>

                    </li>
                  </ul>
                </li>
              

              </ul>
            </nav>

          </div>
        </div>
      </div>

    </div>

  </aside>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>