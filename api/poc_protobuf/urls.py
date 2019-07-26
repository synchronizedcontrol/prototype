from django.urls import path
from poc_protobuf import views

urlpatterns = [
    path('get-persons', views.person_list),
    path('get-persons/id/<int:pk>', views.person_item),
]
